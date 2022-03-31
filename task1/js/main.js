requirejs.config({
    baseUrl: 'js'
});

define(['jquery'], function ($) {

    newPlayer();
    savePlayer();
    clearStorage();
    retrieveProfile();
    editProfile();

    function newPlayer(){
        $('#create').click(function() {
            $('.new-player').show();
            $('.player-profile').hide();
        });
    }

    function storeLocalStorage(){

        var playerName = $('#playername').val();
        var playerRole = $('#player-role').val();
        var team = $('#team').val();
    
        const profile = {
            playerName: playerName,
            playerRole: playerRole,
            team: team,
        }
        localStorage.setItem('profile',JSON.stringify(profile));
    }

    function clearStorage(){
        $('#delete').click(function() {
            localStorage.clear();
            window.location.href = 'index.html';
            return false;
        });
    }

    function savePlayer() {
        $('#submit').on('click', function() {
            storeLocalStorage();

            window.location.href = 'edit.html';
            return false;
        });
    }

    function retrieveProfile(){
        var profile = JSON.parse(localStorage.getItem('profile'));
        $('.player-name').html(profile.playerName);
        $('.player-role').html(profile.playerRole);
        $('.team').html(profile.team);
    }

    function editProfile(){
        $('#edit').click(function() {
            $('.retrieve-profile').hide();
            $('.edit-profile').show();
            
            var profile = JSON.parse(localStorage.getItem('profile'));
            $('.edit-profile #playername').val(profile.playerName);
            $('.edit-profile #player-role').val(profile.playerRole);
            $('.edit-profile #team').val(profile.team);
        });
    }
});