//server.js
const searchKey = document.getElementById('search-input');
const button = document.getElementById('search-button');



function searchNews() {


    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            let searchText = searchKey.value.trim().toLowerCase();

            // Check if any "news" value matches
            const found = data.some(item => item.Tools.toLowerCase().includes(searchText)); // ???????????????

            const matchedItem = data.find(item =>
                item.Tools.toLowerCase().includes(searchText)
            );

            if (searchText === '') {
                alert("⚠️ Please enter some text!");
                return;
            }


             if (searchText === "qr","qrcode","qrcodegenerator"){
                
                window.location.href = `https://qrgenerator.inbondz.com`;

            }else if (searchText === 'tic','tac','toe','tictactoe'){
                
                window.location.href = 'https://tictactoe.inbondz.com'
            }else if (searchText === 'thumbnailextractor','thumbnail','youtubethumbnaildownloader','youtubethumbnail','thumbnaildownloader','ytthumbnaile','ytthumbnailedownloader'){
               
                window.location.href = 'https://ytthumbnailextractor.inbondz.com'
            }else if (searchText === 'imageenhancer','photoenhancer'){
                
                window.location.href = 'https://imageenhancer.inbondz.com'
            }else if (searchText === 'fontgenerator','textstyler'){
                
                window.location.href = 'https://fontgenerator.inbondz.com'
            }else if (searchText === 'jsonformatter','json'){
               
                window.location.href = 'https://jsonformatter.inbondz.com/'
            }else {
                alert("❌ Tools Not Exist.");
            }
        })
        // const handleSearch = () => {
            //     const searchTerm = searchInput.value.trim();
            //     if (searchTerm !== '') {
            //         messageElement.textContent = `Standard search executed for: "${searchTerm}". Tool functionality is not implemented.`;
            //     } else {
            //         messageElement.textContent = "Please enter a tool name to search.";
            //     }
            // };

            // searchButton.addEventListener('click', handleSearch);

            // searchInput.addEventListener('keydown', (e) => {
            //     if (e.key === 'Enter') {
            //         handleSearch();
            //     }
            // });


};


button.addEventListener('click', () => {
     searchNews();
});


searchKey.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchNews();
    }
});