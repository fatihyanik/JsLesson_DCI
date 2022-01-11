// Task: create a program with the functionality resembling a social app (that stores, manages and displays posts + comments)

// Description:

// I'm creating 2 classes: Post and SocialMediaApp.

// Post is responsible for creating instances of posts.
// posts have properties: name/author, title, date, text, comments, and likes
// posts have methods for: liking a post, disliking a post, adding a new comment, editing the post, editing a comment, deleting a comment, displaying the post

// SocialMediaApp initialized my social media app object.
// a SM app has properties: name, posts (array)
// a SM app has methods:
// — add new post — creates a new Post instance by calling the constructor method of the Post class, gives it a unique ID and pushes to the posts array
// — delete a post — removes a post by id
// — display all posts — calls the method responsible for displaying the post data on every post stored in the posts array

class Post {
	constructor(name, title, text) {
		this.name = name;
		this.date = new Date();
		this.title = title;
		this.text = text;
		this.comments = [];
		this.likes = 0;
	}

	likePost() {
		++this.likes;
	}

	dislikePost() {
		// negative ratings are also allowed, just for fun
		--this.likes;
	}

	addNewComment({name, text}) {
		const generateNewID = () => {
			// in a series of n items whose IDs are integers, at least one integer/ID between 0 and n is missing
			let maxID = this.comments.length;
			for (let candID = 0; candID <= maxID; candID++) {
				let isIDTaken = false;
				for (let comment of this.comments) {
					if (candID === comment.id) {
						isIDTaken = true;
						break;
					}
				}
				if (!isIDTaken) return candID;
			}
		}
		const newComment = {id: generateNewID(), name: name, text: text};
		this.comments = [...this.comments, newComment];
	}

	updatePost({title, text}) {
		this.title = title || this.title;
		this.text = text || this.text;
	}

	updateComment({id, text}) {
		this.comments = this.comments.map(comment => id === comment.id ? {id: comment.id, name: comment.name, text: text} : comment )
	}

	deleteComment({id}) {
		this.comments = this.comments.filter(comment => id !== comment.id);
	}

	displayPost() {
		let date = this.date.toLocaleDateString();

		let displayTemplate =`--------------------------
${this.name} on ${date}:
${this.title.toUpperCase()}
${this.text}
--------------------------
Likes: ${this.likes}
${this.comments.length > 0 ? 'Comments: ' + this.comments.length + '\n' : 'No comments yet'}
`;
		this.comments.forEach(comment => {
			displayTemplate += '\t' + comment.name + ':\n' + '\t\t' + comment.text + '\n';
		})

		console.log(displayTemplate);
		return displayTemplate;
	}
}

class SocialMediaApp {
	constructor(name) {
		this.name = name;
		this.posts = [];
	}

	addNewPost({className, name, title, text}) {
		const newPost = new className(name, title, text);
		const generateNewID = () => {
			// in a series of n items whose IDs are integers, at least one integer/ID between 0 and n is missing
			let maxID = this.posts.length;
			for (let candID = 0; candID <= maxID; candID++) {
				let isIDTaken = false;
				for (let post of this.posts) {
					if (candID === post.id) {
						isIDTaken = true;
						break;
					}
				}
				if (!isIDTaken) return candID;
			}
		}
		newPost.id = generateNewID();
		this.posts = [...this.posts, newPost];
		return newPost;
	}

	deletePost({id}) {
		this.posts = this.posts.filter(post => post.id !== id);
	}
	displayPosts() {
		let template = this.name;
		this.posts.forEach(post => {
			template += '\n' + post.displayPost();
		})
	}
}