import RPi.GPIO as GPIO

f = open('db.txt', 'w')
f.write('ON')

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18,GPIO.OUT)
print("LED on")
GPIO.output(18,GPIO.HIGH)
