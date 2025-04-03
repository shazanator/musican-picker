document.addEventListener('DOMContentLoaded', function() {
    const artistSelect = document.getElementById('artist-select');
    const showSongsBtn = document.getElementById('show-songs');
    const resultsDiv = document.getElementById('results');
    const artistName = document.getElementById('artist-name');
    const songList = document.getElementById('song-list');
    
    // Song database
    const artistSongs = {
        'beyonce': {
            name: 'Beyoncé',
            songs: ['Formation', 'Halo', 'Crazy in Love']
        },
        'radiohead': {
            name: 'Radiohead',
            songs: ['Paranoid Android', 'Karma Police', 'No Surprises']
        },
        'dolly': {
            name: 'Dolly Parton',
            songs: ['Jolene', '9 to 5', 'I Will Always Love You']
        },
        'kendrick': {
            name: 'Kendrick Lamar',
            songs: ['HUMBLE.', 'Alright', 'DNA.']
        },
        'adele': {
            name: 'Adele',
            songs: ['Rolling in the Deep', 'Someone Like You', 'Hello']
        }
    };
    
    showSongsBtn.addEventListener('click', function() {
        const selectedArtist = artistSelect.value;
        
        if (!selectedArtist) {
            alert('Please select an artist first!');
            return;
        }
        
        // Get artist data
        const artistData = artistSongs[selectedArtist];
        
        // Update the display
        artistName.textContent = `Top 3 songs by ${artistData.name}:`;
        
        // Clear previous songs
        songList.innerHTML = '';
        
        // Add new songs
        artistData.songs.forEach(song => {
            const li = document.createElement('li');
            li.textContent = song;
            songList.appendChild(li);
        });
        
        // Show results
        resultsDiv.classList.remove('hidden');
    });
});