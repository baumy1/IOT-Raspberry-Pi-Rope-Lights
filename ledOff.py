import RPi.GPIO as GPIO

f = open('db.txt', 'w')
f.write('OFF')

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18,GPIO.OUT)
print("LED off")
GPIO.output(18,GPIO.LOW)
