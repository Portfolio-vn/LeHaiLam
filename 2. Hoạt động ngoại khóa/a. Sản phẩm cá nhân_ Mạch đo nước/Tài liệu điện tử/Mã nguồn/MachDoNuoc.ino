#include <OneWire.h>
#include <DallasTemperature.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

// ==================== OLED =====================
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

// ==================== DS18B20 =====================
#define ONE_WIRE_BUS 15
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

// ==================== TDS =====================
#define TDS_PIN 34
float tdsValue = 0;
float voltage = 0;
float temperature = 25.0;

// ==================== SIMA7680C =====================
#define SIM_TX 17  // ESP32 RX
#define SIM_RX 16  // ESP32 TX

// ThingSpeak info
String apiKey = "YOUR_THINGSPEAK_KEY";
String server = "api.thingspeak.com";

HardwareSerial sim(1);

// ==================== SETUP =====================
void setup() {
  Serial.begin(115200);

  // SIMA7680C UART
  sim.begin(115200, SERIAL_8N1, SIM_RX, SIM_TX);

  // OLED INIT
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);

  sensors.begin();

  delay(2000);
  connectTo4G();
}

// ==================== HÀM KẾT NỐI 4G =====================
void connectTo4G() {
  sim.println("AT");
  delay(1000);

  sim.println("AT+CREG?");
  delay(1000);

  sim.println("AT+CGATT=1"); 
  delay(1000);

  sim.println("AT+CNACT=0,1");  
  delay(2000);

  Serial.println("4G Connected!");
}

// ==================== GỬI DỮ LIỆU THINGSPEAK =====================
void sendToThingSpeak(float tds, float temp) {
  String url = "http://api.thingspeak.com/update?api_key=" + apiKey +
               "&field1=" + String(tds) +
               "&field2=" + String(temp);

  sim.println("AT+HTTPINIT");
  delay(500);

  sim.println("AT+HTTPPARA=\"URL\",\"" + url + "\"");
  delay(500);

  sim.println("AT+HTTPACTION=0");
  delay(2000);

  sim.println("AT+HTTPTERM");
  delay(500);

  Serial.println("Data sent to ThingSpeak!");
}

// ==================== TÍNH TDS =====================
float getTDS(float temp) {
  int adc = analogRead(TDS_PIN);
  voltage = adc * (3.3 / 4095.0);

  // Công thức ước lượng (có thể hiệu chỉnh)
  float tds = (133.42 * voltage * voltage * voltage 
              - 255.86 * voltage * voltage 
              + 857.39 * voltage) * (1.0 + 0.02 * (temp - 25));

  return tds;
}

// ==================== OLED DISPLAY =====================
void showOLED(float tds, float temp) {
  display.clearDisplay();
  display.setCursor(0, 0);
  display.setTextSize(1);

  display.println(" Water Quality Monitor ");
  display.println("-----------------------");

  display.print("Temp: ");
  display.print(temp);
  display.println(" C");

  display.print("TDS : ");
  display.print(tds);
  display.println(" ppm");

  display.display();
}

// ==================== LOOP =====================
void loop() {
  // Đọc nhiệt độ nước
  sensors.requestTemperatures();
  temperature = sensors.getTempCByIndex(0);

  // Đọc TDS
  tdsValue = getTDS(temperature);

  // OLED
  showOLED(tdsValue, temperature);

  // Gửi lên ThingSpeak mỗi 30 giây
  sendToThingSpeak(tdsValue, temperature);

  delay(30000);
}
