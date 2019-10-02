  
	 
	 

	export class GameModel {
		public  player :Player;
		public  oldStats :Record<string, any>;
		public  time :TimeModel;

		public  flags :DefaultDict;

		//public var debug :Boolean;
		// I think this is supposed to be a compile time constant, sorta...
		public  mobile :boolean;

		// TODO: Should this be attached to player instead?
		public  maxHP :() => void;
	}
