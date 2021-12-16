import cv2

cap = cv2.VideoCapture("/Users/jean-jose/Desktop/keyframeJS/server/ressource/super.mp4")


while(cap.isOpened()):

  ret, frame = cap.read()
  if ret == True:

    cv2.imshow('Frame', frame)

    if cv2.waitKey(25) & 0xFF == ord('q'):
      break

  else:
    break

cap.release()

cv2.destroyAllWindows()
