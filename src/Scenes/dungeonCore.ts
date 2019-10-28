
export function inDungeon() { return game.dungeonLoc != 0; }

function dungeonMenu(): void {
    // Display Proper Buttons
    mainView.showMenuButton(MainView.MENU_APPEARANCE);
    mainView.showMenuButton(MainView.MENU_PERKS);
    mainView.hideMenuButton(MainView.MENU_DATA);

    // clear up/down arrows
    hideUpDown();
    // Level junk
    if (player.XP >= (player.level) * 100) {
        mainView.showMenuButton(MainView.MENU_LEVEL);
        mainView.statsView.showLevelUp();
    }
    menu();

    addButton(8, "Items", Inventory.inventoryMenu);
    addButton(9, "Masturbate", Masturbation.masturbateMenu);
    // Display menu
    // 	choices(text1,choice1,text2,choice2,text3,choice3,text4,choice4,text5,choice5,text6,choice6,text7,choice7,text8,choice8,"Items",itemMenu,"Masturbate",masturbateMenu);

}
