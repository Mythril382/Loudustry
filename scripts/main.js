function veryLoud(){
    Core.audio.soundBus.setVolume(100);
    Core.audio.musicBus.setVolume(100);
}
Events.on(ClientLoadEvent, e => veryLoud());
Events.on(WorldLoadEvent, e => {
    if(!Vars.headless) veryLoud();
});
