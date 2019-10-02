/**
 * Created by aimozg on 09.01.14.
 */
 

	 

	export class ItemType
	{
		private static  ITEM_LIBRARY:Dictionary = new Dictionary();
		private static  ITEM_SHORT_LIBRARY:Dictionary = new Dictionary();
		public static  NOTHING:ItemType = new ItemType("NOTHING!");

		public static  lookupItem(id:string):ItemType{
			return ITEM_LIBRARY[id];
		}

		public static  lookupItemByShort(shortName:string):ItemType{
			return ITEM_SHORT_LIBRARY[shortName];
		}

		public static  getItemLibrary():Dictionary
		{
			return ITEM_LIBRARY;
		}

		private  _id:string;
		protected  _shortName:string;
		protected  _longName:string;
		protected  _description:string;
		protected  _value:number;

		/**
		 * Short name to be displayed on buttons
		 */
		public  get shortName():string
		{
			return _shortName;
		}

		/**
		 * A full name of the item, to be described in text
		 */
		public  get longName():string
		{
			return _longName;
		}

		/**
		 * Item base price
		 */
		public  get value():number
		{
			return _value;
		}

		/**
		 * Detailed description to use on tooltips
		 */
		public  get description():string
		{
			return _description;
		}

		/**
		 * 7-character unique (across all the versions) string, representing that item type.
		 */
		public  get id():string
		{
			return _id;
		}

		public  constructor(_id:string,_shortName:string=null,_longName:string=null,_value:number=0,_description:string=null)
		{

			this._id = _id;
			this._shortName = _shortName || _id;
			this._longName = _longName || this.shortName;
			this._description = _description || this.longName;
			this._value = _value;
			if (ITEM_LIBRARY[_id] != null) {
				CoC_Settings.error("Duplicate itemid "+_id+", old item is "+(ITEM_LIBRARY[_id] as ItemType).longName);
			}
			if (ITEM_SHORT_LIBRARY[_shortName] != null){
				trace("WARNING: Item with duplicate shortname: '"+_id+"' and '"+(ITEM_SHORT_LIBRARY[this._shortName] as ItemType)._id+"' share "+this._shortName);
			}
			ITEM_LIBRARY[_id] = this;
			ITEM_SHORT_LIBRARY[this._shortName] = this;
		}


		public  toString():string
		{
			return "\""+_id+"\"";
		}
	}

