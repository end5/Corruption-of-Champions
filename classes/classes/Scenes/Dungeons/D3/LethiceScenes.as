package classes.Scenes.Dungeons.D3
{
	public class LethiceScenes extends BaseContent
	{
		public function LethiceScenes()
		{

		}

		public function encounterLethice():void
		{
			outputText("\n\n<i>“So be it.”</i> Lethice rises from her throne, pacing pensively back and forth. Wings unfurl from behind her back, casting you into the darkness of her demonic shadow. <i>“You seek a fight with the Queen of Mareth, and you shall have one.”</i> With feline grace, she launches herself dozens of feet into the air, flips forward, and snaps her wings out to catch her midair. <i>“My pets! My lovelies! Watch what this mortal’s foolishness earns {him/her}!”</i>");
			outputText("\n\nScattered applause breaks out as Lethice wings around to engage you.");
			if (!player.canFly()) outputText(" Good thing she’s not the only one that can fly!");
			outputText("\n\n<b>It’s a fight!</b>");
			startCombat(new Lethice());
		}
	}
}