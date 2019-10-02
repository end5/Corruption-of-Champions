/**
 * Created by aimozg on 08.01.14.
 */
 

	 
	 
	 
	 

	/**
	 * Contains handy references to scenes and methods
	 */
	export class NPCAwareContent
	{
		public  constructor()
		{

		}
		// Common scenes
		protected  get telAdre():TelAdre
		{
			return telAdre;
		}
		// Follower interactions
		protected  get finter():FollowerInteractions
		{
			return followerInteractions;
		}

		// Amily
		protected  get amilyScene():AmilyScene
		{
			return amilyScene;
		}

		public  amilyFollower():boolean
		{
			return amilyScene.amilyFollower();
		}
		// Anemone
		protected  get anemoneScene():AnemoneScene
		{
			return anemoneScene;
		}
		// Arian
		protected  get arianScene():ArianScene
		{
			return arianScene;
		}
		public  arianFollower():boolean
		{
			return arianScene.arianFollower();
		}
		// Ceraph
		protected  get ceraphScene():CeraphScene
		{
			return ceraphScene;
		}
		protected  get ceraphFollowerScene():CeraphFollowerScene
		{
			return ceraphFollowerScene;
		}
		public  ceraphIsFollower():boolean
		{
			return ceraphFollowerScene.ceraphIsFollower();
		}
		// Ember
		protected  get emberScene():EmberScene
		{
			return emberScene;
		}
		public  followerEmber():boolean
		{
			return emberScene.followerEmber();
		}
		public  emberMF(man:string,woman:string):string
		{
			return emberScene.emberMF(man,woman);
		}
		// Exgartuan
		protected  get exgartuan():Exgartuan
		{
			return exgartuan;
		}
		// Helia
		protected  get helScene():HelScene
		{
			return helScene;
		}
		protected  get helFollower():HelFollower
		{
			return helFollower;
		}
		public  followerHel():boolean
		{
			return helScene.followerHel();
		}
		// Helia spawn
		protected  get helSpawnScene():HelSpawnScene
		{
			return helSpawnScene;
		}

		public  helPregnant():boolean
		{
			return helSpawnScene.helPregnant();
		}
		public  helspawnFollower():boolean
		{
			return helSpawnScene.helspawnFollower();
		}

		// Holli
		protected  get holliScene():HolliScene
		{
			return holliScene;
		}
		// Isabella
		protected  get isabellaScene():IsabellaScene
		{
			return isabellaScene;
		}
		protected  get isabellaFollowerScene():IsabellaFollowerScene
		{
			return isabellaFollowerScene;
		}

		public  isabellaFollower():boolean
		{
			return isabellaFollowerScene.isabellaFollower();
		}

		public  isabellaAccent():boolean
		{
			return isabellaFollowerScene.isabellaAccent();
		}

		// Izma
		public  izmaFollower():boolean
		{
			return izmaScene.izmaFollower();
		}
		protected  get izmaScene():IzmaScene
		{
			return izmaScene;
		}
		// Jojo
		protected  get jojoScene():JojoScene
		{
			return jojoScene;
		}
		protected  get monk():number {
			return game.monk;
		}
		public  campCorruptJojo():boolean
		{
			return jojoScene.campCorruptJojo();
		}
		// Kiha
		protected  get kihaFollower():KihaFollower
		{
			return kihaFollower;
		}
		protected  get kihaScene():KihaScene
		{
			return kihaScene;
		}

		public  followerKiha():boolean
		{
			return kihaFollower.followerKiha();
		}

		// Latex Girl
		protected  get latexGirl():LatexGirl
		{
			return latexGirl;
		}
		public  latexGooFollower():boolean
		{
			return latexGirl.latexGooFollower();
		}
		// Marble
		protected  get marbleScene():MarbleScene
		{
			return marbleScene;
		}
		protected  get marblePurification():MarblePurification
		{
			return marblePurification;
		}
		public  marbleFollower():boolean
		{
			return marbleScene.marbleFollower();
		}
		// Milk slave
		public  milkSlave():boolean
		{
			return milkWaifu.milkSlave();
		}
		protected  get milkWaifu():MilkWaifu
		{
			return milkWaifu;
		}
		// Raphael
		protected  raphael():Raphael
		{
			return raphael;
		}
		public  RaphaelLikes():boolean
		{
			return raphael.RaphaelLikes();
		}
		// Rathazul
		protected  rathazul():Rathazul
		{
			return rathazul;
		}
		// Sheila
		protected  get sheilaScene():SheilaScene
		{
			return sheilaScene;
		}
		// Shouldra
		protected  get shouldraFollower():ShouldraFollower
		{
			return shouldraFollower;
		}

		protected  get shouldraScene():ShouldraScene
		{
			return shouldraScene;
		}

		public  followerShouldra():boolean
		{
			return shouldraFollower.followerShouldra();
		}

		// Sophie
		protected  get sophieBimbo():SophieBimbo
		{
			return sophieBimbo;
		}
		protected  get sophieScene():SophieScene
		{
			return sophieScene;
		}

		protected  get sophieFollowerScene():SophieFollowerScene
		{
			return sophieFollowerScene;
		}

		public  bimboSophie():boolean
		{
			return sophieBimbo.bimboSophie();
		}

		public  sophieFollower():boolean
		{
			return sophieFollowerScene.sophieFollower();
		}
		// Urta
		public  urtaLove(love:number = 0):boolean {
			return urta.urtaLove(love);
		}
		protected  get urta():Urta
		{
			return urta;
		}
		protected  get urtaPregs():UrtaPregs
		{
			return urtaPregs;
		}
		protected  get urtaHeatRut():UrtaHeatRut
		{
			return urtaHeatRut;
		}
		// Valeria
		protected  get valeria():Valeria
		{
			return valeria;
		}
		// Vapula
		protected  get vapula():Vapula
		{
			return vapula;
		}
		public  vapulaSlave():boolean
		{
			return vapula.vapulaSlave();
		}

	}
