/**
 * Created by aimozg on 09.01.14.
 */
 

	 
	 
	 

	export class Fists extends Weapon {
		
		public  constructor() {
			super("Fists  ", "Fists", "fists", "fists", "punch", 0);
		}
		
		 public  useText():void {} //No text for equipping fists

		 public  playerRemove():Weapon {
			return null;
		}
		
/*
		override public function unequip(player:Player, returnToInventory:Boolean, output:Boolean = false):void
		{
		}

		override protected function unequipReturnItem(player:Player, output:Boolean):ItemType
		{
			return null;
		}
*/
	}

