  

	/**
	 * ...
	 * @author Gedan
	 */
	export class room 
	{
		
		public  RoomName:string; // Index name
		public  RoomDisplayName:string; // Header text
		
		public  NorthExit:string;
		public  NorthExitCondition:() => void;
		
		public  EastExit:string;
		public  EastExitCondition:() => void;
		
		public  SouthExit:string;
		public  SouthExitCondition:() => void;
		
		public  WestExit:string;
		public  WestExitCondition:() => void;
		
		public  RoomFunction:() => void;
	}
