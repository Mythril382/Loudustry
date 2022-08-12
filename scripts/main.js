function veryLoud(){
    Core.audio.soundBus.setVolume(1000);
    Core.audio.musicBus.setVolume(1000);
}
Events.on(ClientLoadEvent, e => veryLoud());
Events.on(WorldLoadEvent, e => {
    if(!Vars.headless) veryLoud();
});
