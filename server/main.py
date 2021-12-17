import cv2

cap=cv2.VideoCapture("...mp4")

i=0
while(cap.isOpen()):
    flag,frame=cap.read()
    if flag==Flase:
       break
