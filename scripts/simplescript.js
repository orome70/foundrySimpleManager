function updateTabs(value) {
    //const tabsBis = game.appliction
    const theTabs = ['[data-tab=scenes]','[data-tab=combat]','[data-tab=tables]','[data-tab=cards]','[data-tab=playlists]','[data-tab=compendium]'];
    
        theTabs.forEach(element => {
            if (value){
                $(element).hide();
            } else {
                $(element).show();
                //game.activateTab(element);
            }
    });
}
  




Hooks.on("init", function() {
    // Setting creation

    game.settings.register("SimpleManager", "minimal", {
        name: game.i18n.localize("SMPLMGR.settingsText"),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => updateTabs(value)
    });
       
    console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
  });
  

   
Hooks.on("ready", function() {
    game.settings.set('SimpleManager','minimal', true);
    
    // Choice dialog
    game.settings.set('SimpleManager','minimal', true);
    const modalTitle = game.i18n.localize("SMPLMGR.modalTitle");
    const modalText = game.i18n.localize("SMPLMGR.modalText");
    const modalY = game.i18n.localize("SMPLMGR.modalChoiceY");
    const modalN = game.i18n.localize("SMPLMGR.modalChoiceN");

    let d = new Dialog({
        title: modalTitle,
        content: "<p>"+modalText+"</p>",
        buttons: {
         one: {
          icon: '<i class="fas fa-check"></i>',
          label: modalY,
          callback: () => console.log("Simplified")
         },
         two: {
          icon: '<i class="fas fa-times"></i>',
          label: modalN,
          callback: () => {
            console.log("Classical");
            game.settings.set('SimpleManager','minimal', false);
         }
         }
        },
        default: "two",
        render: html => console.log("Register interactivity in the rendered dialog"),
        close: html => console.log("This always is logged no matter which option is chosen")
    });
    d.render(true);
    
    document.getElementById("board").style["display"] = "none";
    console.log("This code runs once core initialization is ready and game data is available.");
    console.log("minimal value :");
    console.log(game.settings.get('SimpleManager','minimal'));
  });
