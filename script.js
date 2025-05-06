// Function to handle Review and Blog form submissions
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const foodName = document.getElementById('foodName').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    const content = { type: 'review', foodName, rating, comments };
    addContentToList(content);

    // Clear the form fields
    document.getElementById('reviewForm').reset();
});

document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const blogTitle = document.getElementById('blogTitle').value;
    const blogContent = document.getElementById('blogContent').value;

    const content = { type: 'blog', blogTitle, blogContent };
    addContentToList(content);

    // Clear the form fields
    document.getElementById('blogForm').reset();
});

document.getElementById("blog-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let title = document.getElementById("blog-title").value;
    let content = document.getElementById("blog-content").value;
    
    let blogPost = document.createElement("div");
    blogPost.innerHTML = `<h3>${title}</h3><p>${content}</p><hr>`;
    
    document.getElementById("blog-list").appendChild(blogPost);
    
    // Clear form
    document.getElementById("blog-title").value = "";
    document.getElementById("blog-content").value = "";
});

document.getElementById("blog-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let title = document.getElementById("blog-title").value;
    let content = document.getElementById("blog-content").value;
    
    let blogPost = document.createElement("div");
    blogPost.innerHTML = `<h3>${title}</h3><p>${content}</p><hr>`;
    
    document.getElementById("blog-list").appendChild(blogPost);
    
    // Clear form
    document.getElementById("blog-title").value = "";
    document.getElementById("blog-content").value = "";
});


// Function to add review or blog post to the content list
function addContentToList(content) {
    const contentList = document.getElementById('contentList');
    const contentItem = document.createElement('div');
    contentItem.classList.add('content-item');

    if (content.type === 'review') {
        contentItem.innerHTML = `<h3>Food: ${content.foodName}</h3>
                                 <p>Rating: ${content.rating}</p>
                                 <p>${content.comments}</p>`;
    } else if (content.type === 'blog') {
        contentItem.innerHTML = `<h3>${content.blogTitle}</h3>
                                 <p>${content.blogContent}</p>`;
    }

    contentList.appendChild(contentItem);
}

// Function to handle Grocery Price form submission
document.getElementById('priceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const store = document.getElementById('store').value;
    const price = document.getElementById('price').value;

    const priceData = { itemName, store, price };
    addPriceToList(priceData);

    // Clear the form fields
    document.getElementById('priceForm').reset();
});

// Function to add grocery price to the list
function addPriceToList(priceData) {
    const priceList = document.getElementById('priceList');
    const priceItem = document.createElement('div');
    priceItem.classList.add('price-item');
    priceItem.innerHTML = `<h3>${priceData.itemName}</h3>
                           <p>Store: ${priceData.store}</p>
                           <p>Price: $${priceData.price}</p>`;
    priceList.appendChild(priceItem);
}
    document.getElementById("price-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let store = document.getElementById("store-name").value;
    let item = document.getElementById("item-name").value;
    let price = document.getElementById("price").value;
    
    let row = `<tr><td>${store}</td><td>${item}</td><td>$${price}</td></tr>`;
    document.getElementById("price-list").innerHTML += row;
    
    // Clear form
    document.getElementById("store-name").value = "";
    document.getElementById("item-name").value = "";
    document.getElementById("price").value = "";
});
