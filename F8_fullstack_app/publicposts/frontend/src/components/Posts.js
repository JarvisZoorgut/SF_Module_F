import React, {Component} from "react";
import PostService from "../PostService";

import Swal from 'sweetalert2';

const postService = new PostService();

export default class Posts extends Component {
	constructor(props){
    	super(props)
    	this.state = {
        	data : [],
        	inputValue: ''
    	}

    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
    	this.setState({inputValue: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		postService.createPost({ text: this.state.inputValue }).then(() => {
			
			Swal.fire({
				title: 'Успех!',
				text: 'Пост успешно создан!',
				icon: 'success',
				confirmButtonText: 'Ок'
			});

			this.setState({ inputValue: '' });
			this.getData();
		});
	}

	getData(){
    	postService.getPosts().then(result => {
        	this.setState({data: result.data});
    	})
	}

	componentDidMount(){
    	this.getData();
	}

	setLike(post) {
    	postService.setLikePost(post.id);
    	post.likesCount += 1;
    	this.forceUpdate();
	}

	deletePost(postId) {
        postService.deletePost(postId).then(response => {

			Swal.fire({
				title: 'Успех!',
				text: 'Пост успешно удален!',
				icon: 'info',
				confirmButtonText: 'Ок'
			});

            this.getData();
        })
    }

	render() {
		return (
			<div id="posts">
				{this.state.data.map(post =>
					<div id={'post_' + post.id} key={post.id}>
						<p> {post.text} </p>
						<button onClick={() => this.setLike(post)}> {post.likesCount}</button>
						<p>
							Пост создан в {
                            new Date(post.date).toLocaleTimeString('ru-RU', {
                                hour: '2-digit',
                                minute: '2-digit',
                            })} 
                        {' '}
                        { 
                            new Date(post.date).toLocaleDateString('ru-RU', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })
                        }
						</p>
						<button onClick={() => this.deletePost(post.id)}>Delete</button>
						<hr />
					</div>
				)}
				<input type='text' onChange={this.handleChange} value={this.state.inputValue} />
				<button onClick={this.handleSubmit}>Send</button>
			</div>
		);
	}

}