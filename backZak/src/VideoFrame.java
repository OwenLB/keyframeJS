//import java.io.File;

import java.io.File;

import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.videoio.VideoCapture;
import org.opencv.videoio.Videoio;


public class VideoFrame {

	public static void main(String[] args) 
	{
		// TODO Auto-generated method stub
		/*
		Test pour determiner le chemin absolu du projet pour pouvoir utiliser le chemin relatif pour les fichiers
		File directory = new File("./");
		System.out.println(directory.getAbsolutePath());*/
		
		System.loadLibrary(Core.NATIVE_LIBRARY_NAME);
		
		
		VideoCapture cap = new VideoCapture();

	    String input = "./-ujA4N3-ROs_yt_1080p.mp4";
	    String output = "./Output";
	    
	    File directory = new File(output);
	    if (! directory.exists()){
	        directory.mkdir();
	        
	    }
	  
		cap.open(input);
	
		System.out.println();
		/*double frames = cap.get(Videoio.CAP_PROP_FRAME_COUNT);
	    System.out.println( "frames: " + frames);*/
		
		Mat frame = new Mat();
	
		int frame_number=0;
		if (cap.isOpened())
		{
		    while(cap.read(frame)) 
		    {
		        Imgcodecs.imwrite(output + "/" + frame_number +".jpg", frame);
		        frame_number++;
		        //System.out.println("Test");
		    }
		    cap.release();
		    System.out.println("Done " + frame_number + " frames");
		}
	
	    else
	    {
	       // System.out.println("Fail");
	    }
	    
		
		

	

}
}
