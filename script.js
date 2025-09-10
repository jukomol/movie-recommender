// TMDB API Configuration
const API_KEY = '4e44d9029b1270a757cddc766a1bcb63'; // Free TMDB API key for demo
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// Demo data for when API is not accessible
const DEMO_MOVIES = {
    happy: [
        {
            id: 1,
            title: "The Grand Budapest Hotel",
            overview: "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the protégé who becomes his most trusted friend.",
            poster_path: "/eWdyYQrejLuKlKVhPnUFEtj7g3l.jpg",
            release_date: "2014-03-28",
            vote_average: 8.1,
            genre_ids: [35, 18]
        },
        {
            id: 2,
            title: "Paddington",
            overview: "A young Peruvian bear travels to London in search of a home. Finding himself lost and alone at Paddington Station, he meets the kindly Brown family, who offer him a temporary haven.",
            poster_path: "/lbUPXOKFQNKUVkxOMatsk2zhoYb.jpg",
            release_date: "2014-11-28",
            vote_average: 7.2,
            genre_ids: [35, 10751, 16]
        },
        {
            id: 3,
            title: "La La Land",
            overview: "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars.",
            poster_path: "/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
            release_date: "2016-12-09",
            vote_average: 7.9,
            genre_ids: [35, 18, 10402]
        }
    ],
    sad: [
        {
            id: 4,
            title: "Inside Out",
            overview: "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco.",
            poster_path: "/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
            release_date: "2015-06-19",
            vote_average: 8.0,
            genre_ids: [16, 18, 10751]
        },
        {
            id: 5,
            title: "The Pursuit of Happyness",
            overview: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor.",
            poster_path: "/12vF4nXz4HeBxgexK0AcGEIFRBu.jpg",
            release_date: "2006-12-15",
            vote_average: 8.0,
            genre_ids: [18]
        }
    ],
    excited: [
        {
            id: 6,
            title: "Mad Max: Fury Road",
            overview: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life.",
            poster_path: "/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
            release_date: "2015-05-15",
            vote_average: 7.6,
            genre_ids: [28, 12, 878]
        },
        {
            id: 7,
            title: "John Wick",
            overview: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
            poster_path: "/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
            release_date: "2014-10-24",
            vote_average: 7.4,
            genre_ids: [28, 53]
        }
    ],
    romantic: [
        {
            id: 8,
            title: "The Princess Bride",
            overview: "In this enchantingly cracked fairy tale, the beautiful Princess Buttercup and the dashing Westley must overcome staggering odds to find happiness amid six-fingered swordsmen, murderous princes, Sicilians and rodents of unusual size.",
            poster_path: "/gpxjoM0hl7JYOzC6p9OC3ZYfkNc.jpg",
            release_date: "1987-10-09",
            vote_average: 7.7,
            genre_ids: [12, 35, 10751, 14, 10749]
        }
    ],
    adventurous: [
        {
            id: 9,
            title: "Indiana Jones: Raiders of the Lost Ark",
            overview: "When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.",
            poster_path: "/ceG9VzoRAVGwivFU403Wc3AHRys.jpg",
            release_date: "1981-06-12",
            vote_average: 7.9,
            genre_ids: [12, 28]
        }
    ],
    scary: [
        {
            id: 10,
            title: "Get Out",
            overview: "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
            poster_path: "/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
            release_date: "2017-02-24",
            vote_average: 7.7,
            genre_ids: [27, 53, 9648]
        }
    ],
    thoughtful: [
        {
            id: 11,
            title: "Inception",
            overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
            poster_path: "/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
            release_date: "2010-07-16",
            vote_average: 8.3,
            genre_ids: [28, 878, 53]
        }
    ],
    funny: [
        {
            id: 12,
            title: "Superbad",
            overview: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
            poster_path: "/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
            release_date: "2007-08-17",
            vote_average: 7.2,
            genre_ids: [35]
        }
    ]
};

// Genre mapping for display
const GENRES = {
    12: "Adventure",
    14: "Fantasy", 
    16: "Animation",
    18: "Drama",
    27: "Horror",
    28: "Action",
    35: "Comedy",
    36: "History",
    53: "Thriller",
    99: "Documentary",
    878: "Science Fiction",
    9648: "Mystery",
    10402: "Music",
    10749: "Romance",
    10751: "Family"
};

// Global variables
let currentMood = 'happy';
let currentPage = 1;
let isLoading = false;
let wishlist = JSON.parse(localStorage.getItem('movieWishlist')) || [];

// Mood to genre mapping
const moodGenres = {
    happy: [35, 10751, 16], // Comedy, Family, Animation
    sad: [18, 10749], // Drama, Romance
    excited: [28, 12, 53], // Action, Adventure, Thriller
    romantic: [10749, 35], // Romance, Comedy
    adventurous: [12, 28, 878], // Adventure, Action, Science Fiction
    scary: [27, 53], // Horror, Thriller
    thoughtful: [18, 99, 36], // Drama, Documentary, History
    funny: [35, 16] // Comedy, Animation
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    updateWishlistCount();
    loadMoviesForMood();
    setupEventListeners();
});

// Event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const wishlistModal = document.getElementById('wishlistModal');
        const movieModal = document.getElementById('movieModal');
        
        if (event.target === wishlistModal) {
            wishlistModal.style.display = 'none';
        }
        if (event.target === movieModal) {
            movieModal.style.display = 'none';
        }
    });
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Mood selection
function selectMood(mood) {
    currentMood = mood;
    currentPage = 1;
    
    // Update active mood button
    document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-mood="${mood}"]`).classList.add('active');
    
    // Update section title
    const moodTitles = {
        happy: 'Movies for Your Happy Mood',
        sad: 'Movies for When You Need a Good Cry',
        excited: 'Action-Packed Movies for Your Energy',
        romantic: 'Romantic Movies for Love',
        adventurous: 'Adventure Movies for Your Spirit',
        scary: 'Horror Movies for Thrills',
        thoughtful: 'Thought-Provoking Movies',
        funny: 'Comedy Movies for Laughs'
    };
    
    document.getElementById('sectionTitle').textContent = moodTitles[mood];
    
    // Clear current movies and load new ones
    document.getElementById('moviesGrid').innerHTML = '';
    loadMoviesForMood();
}

// Load movies based on current mood
async function loadMoviesForMood() {
    if (isLoading) return;
    
    isLoading = true;
    showLoading(true);
    
    try {
        // Try API first, fallback to demo data
        const genres = moodGenres[currentMood];
        const genreQuery = genres.join(',');
        
        let movies;
        
        try {
            const response = await fetch(
                `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreQuery}&page=${currentPage}&sort_by=popularity.desc&vote_average.gte=6`
            );
            
            if (!response.ok) throw new Error('API not accessible');
            
            const data = await response.json();
            movies = data.results;
        } catch (apiError) {
            console.log('API not accessible, using demo data');
            // Use demo data when API is not available
            movies = DEMO_MOVIES[currentMood] || [];
        }
        
        displayMovies(movies);
        
    } catch (error) {
        console.error('Error loading movies:', error);
        // Even if there's an error, try to show demo data
        const demoMovies = DEMO_MOVIES[currentMood] || [];
        if (demoMovies.length > 0) {
            displayMovies(demoMovies);
        } else {
            showError('No movies available for this mood.');
        }
    } finally {
        isLoading = false;
        showLoading(false);
    }
}

// Search movies
async function handleSearch() {
    const query = document.getElementById('searchInput').value.trim();
    
    if (query.length === 0) {
        // If search is cleared, reload mood-based movies
        currentPage = 1;
        document.getElementById('moviesGrid').innerHTML = '';
        loadMoviesForMood();
        return;
    }
    
    if (query.length < 2) return;
    
    isLoading = true;
    showLoading(true);
    
    try {
        // Search in demo data first
        const allDemoMovies = Object.values(DEMO_MOVIES).flat();
        const searchResults = allDemoMovies.filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase()) ||
            movie.overview.toLowerCase().includes(query.toLowerCase())
        );
        
        document.getElementById('moviesGrid').innerHTML = '';
        
        if (searchResults.length > 0) {
            displayMovies(searchResults);
        } else {
            // Try API if no local results
            try {
                const response = await fetch(
                    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`
                );
                
                if (response.ok) {
                    const data = await response.json();
                    displayMovies(data.results);
                } else {
                    throw new Error('API search failed');
                }
            } catch (apiError) {
                showError('No movies found for your search.');
            }
        }
        
    } catch (error) {
        console.error('Error searching movies:', error);
        showError('Search failed. Please try again.');
    } finally {
        isLoading = false;
        showLoading(false);
    }
}

// Display movies in grid
function displayMovies(movies) {
    const moviesGrid = document.getElementById('moviesGrid');
    
    movies.forEach(movie => {
        if (movie) { // Check if movie exists
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.onclick = () => showMovieDetails(movie.id);
            
            const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
            const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
            const isInWishlist = wishlist.some(item => item.id === movie.id);
            
            // Create movie genres
            const movieGenres = movie.genre_ids ? 
                movie.genre_ids.map(id => GENRES[id]).filter(g => g).slice(0, 2) : 
                ['Movie'];
            
            // Create the poster element
            const posterDiv = document.createElement('div');
            posterDiv.className = 'movie-poster';
            
            if (movie.poster_path) {
                // Try TMDB image first, with fallback to placeholder
                posterDiv.style.backgroundImage = `url('${IMG_URL}${movie.poster_path}')`;
                posterDiv.style.backgroundSize = 'cover';
                posterDiv.style.backgroundPosition = 'center';
                
                // Create a hidden image to test loading
                const testImg = document.createElement('img');
                testImg.style.display = 'none';
                testImg.onerror = () => {
                    // Fallback to attractive placeholder
                    createPosterPlaceholder(posterDiv, movie.title, movieGenres[0] || 'Movie');
                };
                testImg.src = `${IMG_URL}${movie.poster_path}`;
                posterDiv.appendChild(testImg);
            } else {
                // Use placeholder directly
                createPosterPlaceholder(posterDiv, movie.title, movieGenres[0] || 'Movie');
            }
            
            // Add rating and wishlist overlays
            posterDiv.innerHTML += `
                <div class="movie-rating">
                    <i class="fas fa-star"></i>
                    <span>${rating}</span>
                </div>
                <div class="wishlist-icon ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlistItem(${movie.id})">
                    <i class="fas fa-heart"></i>
                </div>
            `;

            card.innerHTML = `
                <div class="movie-info">
                    <div class="movie-title">${movie.title}</div>
                    <div class="movie-year">${year}</div>
                    <div class="movie-genres">
                        ${movieGenres.map(genre => 
                            `<span class="genre-tag">${genre}</span>`
                        ).join('')}
                    </div>
                    <div class="movie-overview">
                        ${movie.overview || 'No overview available.'}
                    </div>
                </div>
            `;
            
            // Insert poster at the beginning
            card.insertBefore(posterDiv, card.firstChild);
            
            moviesGrid.appendChild(card);
        }
    });
}

// Create movie card element
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => showMovieDetails(movie.id);
    
    const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
    
    // Check if movie is in wishlist
    const isInWishlist = wishlist.some(item => item.id === movie.id);
    
    // Create simple gradient background with movie title if no poster
    let posterStyle;
    if (movie.poster_path) {
        posterStyle = `background-image: url('${IMG_URL}${movie.poster_path}')`;
    } else {
        // Simple gradient background with title
        posterStyle = `
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 16px;
            text-align: center;
            font-weight: 600;
        `;
    }
    
    card.innerHTML = `
        <div class="movie-poster" style="${posterStyle}">
            ${!movie.poster_path ? `
                <div>
                    <div style="font-size: 40px; margin-bottom: 10px;">🎬</div>
                    <div>${movie.title.length > 15 ? movie.title.substring(0, 12) + '...' : movie.title}</div>
                </div>
            ` : ''}
            <div class="movie-rating">
                <i class="fas fa-star"></i>
                <span>${rating}</span>
            </div>
            <div class="wishlist-icon ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlistItem(${movie.id})">
                <i class="fas fa-heart"></i>
            </div>
        </div>
        <div class="movie-info">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-year">${year}</div>
            <div class="movie-genres" id="genres-${movie.id}">
                <!-- Genres will be loaded dynamically -->
            </div>
            <div class="movie-overview">
                ${movie.overview || 'No overview available.'}
            </div>
        </div>
    `;
    
    // Load genres for this movie
    loadMovieGenres(movie.id, movie.genre_ids);
    
    return card;
}

// Create attractive poster placeholder
function createPosterPlaceholder(element, title, genre) {
    // Choose colors based on genre
    const genreColors = {
        'Action': 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
        'Comedy': 'linear-gradient(135deg, #feca57 0%, #ff9ff3 100%)',
        'Drama': 'linear-gradient(135deg, #48dbfb 0%, #0abde3 100%)',
        'Horror': 'linear-gradient(135deg, #2f1b69 0%, #000000 100%)',
        'Romance': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'Adventure': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'Animation': 'linear-gradient(135deg, #ff9a56 0%, #ffad56 100%)',
        'Family': 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
        'Science Fiction': 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
        'Thriller': 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
        'Mystery': 'linear-gradient(135deg, #2c2c54 0%, #40407a 100%)',
        'Fantasy': 'linear-gradient(135deg, #5f27cd 0%, #00d2d3 100%)'
    };
    
    const gradient = genreColors[genre] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    const displayTitle = title.length > 20 ? title.substring(0, 17) + '...' : title;
    
    element.style.background = gradient;
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.alignItems = 'center';
    element.style.justifyContent = 'center';
    element.style.color = 'white';
    element.style.textAlign = 'center';
    element.style.position = 'relative';
    element.style.fontFamily = "'Poppins', sans-serif";
    
    const placeholderContent = document.createElement('div');
    placeholderContent.innerHTML = `
        <div style="font-size: 60px; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">🎬</div>
        <div style="font-size: 16px; font-weight: 600; text-shadow: 1px 1px 2px rgba(0,0,0,0.5); padding: 0 15px; line-height: 1.3;">${displayTitle}</div>
        <div style="font-size: 12px; margin-top: 10px; opacity: 0.8; text-transform: uppercase; letter-spacing: 1px;">${genre}</div>
    `;
    
    element.appendChild(placeholderContent);
}

// Load and display genres for a movie
async function loadMovieGenres(movieId, genreIds) {
    try {
        const genresContainer = document.getElementById(`genres-${movieId}`);
        if (!genresContainer) return;
        
        // Use local genre mapping instead of API
        const movieGenres = genreIds
            .map(id => GENRES[id])
            .filter(genre => genre); // Remove undefined entries
        
        genresContainer.innerHTML = movieGenres
            .slice(0, 3) // Limit to 3 genres for better display
            .map(genre => `<span class="genre-tag">${genre}</span>`)
            .join('');
            
    } catch (error) {
        console.error('Error loading genres:', error);
    }
}

// Show detailed movie information
async function showMovieDetails(movieId) {
    try {
        showLoading(true);
        
        // First try to find in demo data
        const allDemoMovies = Object.values(DEMO_MOVIES).flat();
        const demoMovie = allDemoMovies.find(movie => movie.id === movieId);
        
        if (demoMovie) {
            // Use demo data with mock additional details
            const mockDetails = {
                ...demoMovie,
                runtime: 120,
                budget: 50000000,
                genres: demoMovie.genre_ids.map(id => ({ id, name: GENRES[id] })).filter(g => g.name)
            };
            
            const mockCredits = {
                crew: [{ job: 'Director', name: 'Sample Director' }],
                cast: [
                    { name: 'Actor One' },
                    { name: 'Actor Two' },
                    { name: 'Actor Three' },
                    { name: 'Actor Four' },
                    { name: 'Actor Five' }
                ]
            };
            
            const mockProviders = {
                results: {
                    US: {
                        flatrate: [
                            { provider_name: 'Netflix' },
                            { provider_name: 'Amazon Prime Video' }
                        ],
                        rent: [
                            { provider_name: 'Apple TV' },
                            { provider_name: 'Google Play Movies' }
                        ],
                        buy: [
                            { provider_name: 'Amazon Video' }
                        ]
                    }
                }
            };
            
            displayMovieDetails(mockDetails, mockCredits, mockProviders);
        } else {
            // Try API for real movie details
            const [movieResponse, creditsResponse, providersResponse] = await Promise.all([
                fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`),
                fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`),
                fetch(`${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`)
            ]);
            
            const movie = await movieResponse.json();
            const credits = await creditsResponse.json();
            const providers = await providersResponse.json();
            
            displayMovieDetails(movie, credits, providers);
        }
        
    } catch (error) {
        console.error('Error loading movie details:', error);
        showError('Failed to load movie details.');
    } finally {
        showLoading(false);
    }
}

// Display movie details in modal
function displayMovieDetails(movie, credits, providers) {
    const modal = document.getElementById('movieModal');
    const content = document.getElementById('movieDetailsContent');
    
    const posterUrl = movie.poster_path ? 
        `${IMG_URL}${movie.poster_path}` : 
        generatePosterPlaceholder(movie.title);
    
    const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
    const runtime = movie.runtime ? `${movie.runtime} min` : 'N/A';
    const director = credits.crew.find(person => person.job === 'Director');
    const cast = credits.cast.slice(0, 5).map(actor => actor.name).join(', ');
    
    // Get streaming providers for US (you can modify this for other countries)
    const usProviders = providers.results?.US;
    const streamingPlatforms = [];
    
    if (usProviders?.flatrate) {
        streamingPlatforms.push(...usProviders.flatrate.map(p => ({ name: p.provider_name, type: 'Stream' })));
    }
    if (usProviders?.rent) {
        streamingPlatforms.push(...usProviders.rent.slice(0, 3).map(p => ({ name: p.provider_name, type: 'Rent' })));
    }
    if (usProviders?.buy) {
        streamingPlatforms.push(...usProviders.buy.slice(0, 2).map(p => ({ name: p.provider_name, type: 'Buy' })));
    }
    
    content.innerHTML = `
        <div class="movie-details-content">
            <div class="movie-details-poster" style="background-image: url('${posterUrl}')"></div>
            <div class="movie-details-info">
                <h2 class="movie-details-title">${movie.title}</h2>
                <div class="movie-details-meta">
                    <span class="meta-item"><i class="fas fa-calendar"></i> ${year}</span>
                    <span class="meta-item"><i class="fas fa-clock"></i> ${runtime}</span>
                    <span class="meta-item"><i class="fas fa-star"></i> ${movie.vote_average.toFixed(1)}/10</span>
                    ${movie.budget && movie.budget > 0 ? `<span class="meta-item"><i class="fas fa-dollar-sign"></i> $${(movie.budget / 1000000).toFixed(1)}M</span>` : ''}
                </div>
                
                <div class="movie-genres">
                    ${movie.genres ? movie.genres.map(genre => `<span class="genre-tag">${genre.name}</span>`).join('') : ''}
                </div>
                
                <div class="movie-details-overview">
                    <p>${movie.overview || 'No overview available.'}</p>
                </div>
                
                ${director ? `<p><strong>Director:</strong> ${director.name}</p>` : ''}
                ${cast ? `<p><strong>Cast:</strong> ${cast}</p>` : ''}
                
                ${streamingPlatforms.length > 0 ? `
                    <div class="streaming-info">
                        <h4><i class="fas fa-tv"></i> Where to Watch</h4>
                        <div class="streaming-platforms">
                            ${streamingPlatforms.map(platform => 
                                `<span class="platform-tag">${platform.name} (${platform.type})</span>`
                            ).join('')}
                        </div>
                    </div>
                ` : `
                    <div class="streaming-info">
                        <h4><i class="fas fa-tv"></i> Where to Watch</h4>
                        <div class="streaming-platforms">
                            <span class="platform-tag">Netflix (Stream)</span>
                            <span class="platform-tag">Amazon Prime Video (Stream)</span>
                            <span class="platform-tag">Apple TV (Rent)</span>
                            <span class="platform-tag">Google Play Movies (Rent)</span>
                        </div>
                    </div>
                `}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Wishlist functionality
function toggleWishlistItem(movieId) {
    const existingIndex = wishlist.findIndex(item => item.id === movieId);
    
    if (existingIndex > -1) {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
    } else {
        // Add to wishlist (we need to fetch movie details)
        addToWishlist(movieId);
        return;
    }
    
    localStorage.setItem('movieWishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    updateWishlistIcons();
}

// Add movie to wishlist
async function addToWishlist(movieId) {
    try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        const movie = await response.json();
        
        wishlist.push({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            vote_average: movie.vote_average
        });
        
        localStorage.setItem('movieWishlist', JSON.stringify(wishlist));
        updateWishlistCount();
        updateWishlistIcons();
        
    } catch (error) {
        console.error('Error adding to wishlist:', error);
    }
}

// Update wishlist count in navbar
function updateWishlistCount() {
    document.querySelector('.wishlist-count').textContent = wishlist.length;
}

// Update wishlist icons in movie cards
function updateWishlistIcons() {
    document.querySelectorAll('.wishlist-icon').forEach(icon => {
        const movieCard = icon.closest('.movie-card');
        const movieId = parseInt(icon.onclick.toString().match(/\d+/)[0]);
        const isInWishlist = wishlist.some(item => item.id === movieId);
        
        icon.style.background = isInWishlist ? '#ff4757' : 'rgba(0,0,0,0.8)';
        icon.style.color = isInWishlist ? 'white' : '#ff4757';
    });
}

// Toggle wishlist modal
function toggleWishlist() {
    const modal = document.getElementById('wishlistModal');
    const isVisible = modal.style.display === 'block';
    
    if (isVisible) {
        modal.style.display = 'none';
    } else {
        displayWishlist();
        modal.style.display = 'block';
    }
}

// Display wishlist items
function displayWishlist() {
    const content = document.getElementById('wishlistContent');
    
    if (wishlist.length === 0) {
        content.innerHTML = `
            <div class="empty-wishlist">
                <i class="fas fa-heart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                <p>Your wishlist is empty</p>
                <p>Add movies by clicking the heart icon on any movie card</p>
            </div>
        `;
        return;
    }
    
    content.innerHTML = wishlist.map(movie => {
        const posterUrl = movie.poster_path ? `${IMG_URL}${movie.poster_path}` : 'https://via.placeholder.com/60x90?text=No+Image';
        const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
        
        return `
            <div class="wishlist-item">
                <div class="wishlist-poster" style="background-image: url('${posterUrl}')" onclick="showMovieDetails(${movie.id})"></div>
                <div class="wishlist-info" onclick="showMovieDetails(${movie.id})">
                    <div class="wishlist-title">${movie.title}</div>
                    <div class="wishlist-year">${year}</div>
                    <div class="movie-rating">
                        <i class="fas fa-star"></i>
                        <span>${movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</span>
                    </div>
                </div>
                <div class="remove-wishlist" onclick="toggleWishlistItem(${movie.id})">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        `;
    }).join('');
}

// Load more movies
function loadMoreMovies() {
    const searchQuery = document.getElementById('searchInput').value.trim();
    
    if (searchQuery) {
        // Don't load more for search results (could be implemented if needed)
        return;
    }
    
    currentPage++;
    loadMoviesForMood();
}

// Close movie modal
function closeMovieModal() {
    document.getElementById('movieModal').style.display = 'none';
}

// Utility functions
function showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = show ? 'block' : 'none';
}

function showError(message) {
    // Simple error display - you could enhance this with a proper toast notification
    alert(message);
}

// Handle API rate limiting and errors gracefully
const originalFetch = window.fetch;
window.fetch = async function(...args) {
    try {
        const response = await originalFetch.apply(this, args);
        
        if (response.status === 429) {
            // Rate limited - wait and retry
            await new Promise(resolve => setTimeout(resolve, 1000));
            return originalFetch.apply(this, args);
        }
        
        return response;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};