document.addEventListener('DOMContentLoaded', function () {
    const discordLinks = [
        { platform: 'Spotify', url: 'link_naar_Spotify_Discord_presence' },
        { platform: 'Twitch', url: 'link_naar_Twitch_Discord_presence' },
        { platform: 'YouTube', url: 'link_naar_YouTube_Discord_presence' },
        { platform: 'Twitter', url: 'link_naar_Twitter_Discord_presence' },
        { platform: 'Instagram', url: 'link_naar_Instagram_Discord_presence' },
        { platform: 'Reddit', url: 'link_naar_Reddit_Discord_presence' }
    ];

    const discordList = document.getElementById('discord-links');

    discordLinks.forEach(link => {
        const listItem = document.createElement('li');
        const linkItem = document.createElement('a');
        linkItem.textContent = link.platform;
        linkItem.href = link.url;
        listItem.appendChild(linkItem);
        discordList.appendChild(listItem);
    });
});
