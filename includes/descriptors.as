 
 
 

export function sackDescript():string
{
	return Appearance.sackDescript(player);
}

export function cockClit(number:number = 0):string {
	if(player.hasCock() && number >= 0 && number < player.cockTotal()) return player.cockDescript(number);
	else return clitDescript();
}

export function chestDesc():string {
	return player.chestDesc();
}

export function tongueDescript():string {
	return Appearance.tongueDescription(player);
}
export function wingsDescript():string {
	return Appearance.wingsDescript(player);
}
export function tailDescript():string {
	return Appearance.tailDescript(player);
}
export function oneTailDescript():string {
	return Appearance.oneTailDescript(player);
}

export function ballsDescriptLight(forcedSize:boolean = true):string {
	return Appearance.ballsDescription(forcedSize, true, player);
}

export function ballDescript():string {
	return Appearance.ballsDescription(false, false, player);
}

export function ballsDescript():string {
	return Appearance.ballsDescription(false, true, player, true);
}
export function simpleBallsDescript():string {
	return Appearance.ballsDescription(false, true, player);
}

export function assholeDescript():string {
	return Appearance.assholeDescript(player);
}
		
export function hipDescript():string {
	return Appearance.hipDescription(player);
}
export function assDescript():string {
	return buttDescript();
}
export function buttDescript():string {
	return Appearance.buttDescription(player);
}

export function nippleDescript(rowNum:number):string {
	return Appearance.nippleDescription(player, rowNum);
}

export function hairDescript():string {
	return Appearance.hairDescription(player);
}

export function hairOrFur():string {
	return Appearance.hairOrFur(player);
}

export function clitDescript():string {
	return Appearance.clitDescription(player);
}

//Vaginas + Descript
export function vaginaDescript(vaginaNum:number = 0):string {
	return Appearance.vaginaDescript(player, vaginaNum);
}

//Allvagina descript
export function allVaginaDescript():string {
	if (player.vaginas.length == 1) return vaginaDescript(rand(player.vaginas.length - 1));
	if (player.vaginas.length > 1) return (vaginaDescript(rand(player.vaginas.length - 1)) + "s");
	
	CoC_Settings.error("ERROR: allVaginaDescript called with no vaginas.");
	return "ERROR: allVaginaDescript called with no vaginas.";
}

export function cockDescript(cockNum:number = 0):string 
{
	return player.cockDescript(cockNum);
}

export function allBreastsDescript():string {
	return Appearance.allBreastsDescript(player);
}
	
export function breastDescript(rowNum:number):string
{
	return player.breastDescript(rowNum);
}

export function num2Text(number:number):string {
	return Utils.num2Text(number);
}

export function num2Text2(number:number):string {
	return Utils.num2Text2(number);
}

export function Num2Text(number:number):string {
	return Utils.Num2Text(number);
}
