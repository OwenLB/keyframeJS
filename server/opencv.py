import cv2
cap = cv2.VideoCapture("server/ressource/super.mp4")

i=0
while(cap.isOpened()):

  ret, frame = cap.read() 
  if ret == True:

    
    cv2.imwrite("picture " + str(i) + ".jpg", frame )
    i += 1
    if cv2.waitKey(25) & 0xFF == ord('q'):
      break

  else:
    break
    

cap.release()

cv2.destroyAllWindows()
