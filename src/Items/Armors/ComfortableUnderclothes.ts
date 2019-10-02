/**
 * Created by aimozg on 10.01.14.
 */
 

	 
	 
	 

	export  class ComfortableUnderclothes extends Armor {
		
		public  constructor() {
			super("c.under", "c.under", "comfortable underclothes", "comfortable underclothes", 0, 0, "comfortable underclothes", "");
		}
		
		 public  playerRemove():Armor {
			return null; //Player never picks up their underclothes
		}

/*
		override public function unequip(player:Player, returnToInventory:Boolean, output:Boolean = false):void
		{
		}

		override protected function unequipReturnItem(player:Player,output:Boolean):ItemType
		{
			return null;
		}
*/
	}

