{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf460
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
\
function Car(carColor, carDoors) \{\
    this.color = carColor;\
    this.doors = carDoors;\
\}\
\
Car.prototype.Drive = function () \{ console.log("Driving..."); \};\
\
\
function BMW(carColor, carDoors, carName) \{\
    Car.call(this, carColor, carDoors);\
    this.name = carName;\
\}\
\
BMW.prototype = new Car("red", 4);\
\
\
function BmwSport(topSpeed, carColor, carDoors, carName) \{\
    BMW.call(this, carColor, carDoors, carName);\
    this.speed = topSpeed;\
\}\
\
BmwSport.prototype = new BMW("black", 3, "Six");\
\
function M3(carYear, carSpeed, carColor, carDoors, carName) \{\
    BmwSport.call(this, carSpeed, carColor, carDoors, carName);\
    this.year = carYear;\
\}\
\
M3.prototype = new BmwSport(240, "black", 4, "Six Again");\
\
\
function fun1() \{\
    return new M3("2016", 241, "black", 3, "M3 Turbo");\
\}\
}