import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find(); // asynchronous

        res.status(200).json(postMessages); // return array of all post messages
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPosts = async (req, res) => {
    const postBody = req.body;

    const newPost = new PostMessage(postBody);

    try {
        await newPost.save(); //asynchrounous action

        //successful creation
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}