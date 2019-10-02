/**
 * Created by aimozg on 10.01.14.
 */
 

	 
	 
	 

	export class Armor extends Useable //Equipable
	{
		private  _def:number;
		private  _perk:string;
		private  _name:string;
		private  _supportsBulge:boolean;
		
		public  constructor(id:string, shortName:string, name:string, longName:string, def:number, value:number = 0, description:string = null, perk:string = "", supportsBulge:boolean = false) {
			super(id, shortName, longName, value, description);
			this._name = name;
			this._def = def;
			this._perk = perk;
			_supportsBulge = supportsBulge;
		}
		
		public  get def():number { return _def; }
		
		public  get perk():string { return _perk; }
		
		public  get name():string { return _name; }
		
		public  get supportsBulge():boolean { return _supportsBulge && game.player.modArmorName == ""; }
			//For most clothes if the modArmorName is set then it's Exgartuan's doing. The comfortable clothes are the exception, they override this function.
		
		 public  useText():void {
			outputText("You equip " + longName + ".  ");
		}
		
		public  playerEquip():Armor { //This item is being equipped by the player. Add any perks, etc. - This function should only handle mechanics, not text output
			return this;
		}
		
		public  playerRemove():Armor { //This item is being removed by the player. Remove any perks, etc. - This function should only handle mechanics, not text output
			while (game.player.findPerk(PerkLib.BulgeArmor) >= 0) game.player.removePerk(PerkLib.BulgeArmor); //TODO remove this Exgartuan hack
			if (game.player.modArmorName.length > 0) game.player.modArmorName = "";
			return this;
		}
		
		public  removeText():void {} //Produces any text seen when removing the armor normally
		
/*
		override protected function equip(player:Player, returnOldItem:Boolean,output:Boolean):void
		{
			if (output) clearOutput();
			if (canUse(player, true)) {
				if(output) outputText("You equip your " + _name + ".  ");
				var oldArmor:Armor = player.armor;
				oldArmor.unequip(player, returnOldItem, output);
				player.setArmorHiddenField(this);
				equipped(player,output);
			}
		}

		override public function unequip(player:Player, returnToInventory:Boolean, output:Boolean = false):void
		{
			while(player.findPerk(PerkLib.BulgeArmor) >= 0) player.removePerk(PerkLib.BulgeArmor);// TODO remove this Exgartuan hack
			if (returnToInventory) {
				var itype:ItemType = unequipReturnItem(player, output);
				if (itype != null) {
					game.itemSwapping = true;
					if (output && itype == this)
						outputText("You have your old set of " + longName + " left over.  ");
					game.inventory.takeItem(this, false);
				}
			}
			player.setArmorHiddenField(ArmorLib.COMFORTABLE_UNDERCLOTHES);
			if (player.modArmorName.length > 0) player.modArmorName = "";
			unequipped(player,output);
		}
*/
	}

