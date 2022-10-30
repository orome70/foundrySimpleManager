function updateTabs(value) {
    const theTabs = ['[data-tab=scenes]','[data-tab=combat]','[data-tab=tables]','[data-tab=cards]','[data-tab=playlists]','[data-tab=compendium]'];
    
        theTabs.forEach(element => {
            if (value){
                $(element).hide();
            } else {
                $(element).show();
            }
    });
}
  




Hooks.on("init", function() {
    // Setting creation
    game.settings.register("SimpleManager", "minimal", {
        name: "Simple interface",
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
    console.log("Minimal value ?");
    console.log(game.settings.get('SimpleManager','minimal'));

    // Choice dialog
    game.settings.set('SimpleManager','minimal', true);
    let d = new Dialog({
        title: "Simplified interface",
        content: "<p>You must choose if you wish to use a simplified interface</p>",
        buttons: {
         one: {
          icon: '<i class="fas fa-check"></i>',
          label: "Simplified interface",
          callback: () => console.log("Simplified")
         },
         two: {
          icon: '<i class="fas fa-times"></i>',
          label: "Classical interface",
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
    /*
    if (game.settings.get('SimpleManager','minimal')){
        $('[data-tab=scenes]').hide();
        $('[data-tab=combat]').hide();
        $('[data-tab=tables]').hide();
        $('[data-tab=cards]').hide();
        $('[data-tab=playlists]').hide();
        $('[data-tab=compendium]').hide();
        // Liste des autres tabs :
        //$('[data-tab=chat]').hide();
        //$('[data-tab=items]').hide();
        //$('[data-tab=journal]').hide();
        //$('[data-tab=actors]').hide();
        //$('[data-tab=settings]').hide();    
    }
    */
  });
