"use client"
import { useState } from "react";

interface Comment {
  id: number;
  text: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Handle adding new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1, // Simple ID incrementation
        text: newComment,
      };
      setComments((prevComments) => [...prevComments, newCommentObj]);
      setNewComment(""); // Clear input field
    }
  };

  return (
    <div className="comments-section mt-8 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments</h2>

      {/* Comments List */}
      <div className="comments-list mt-4 space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-gray-800">{comment.text}</p>
            </div>
          ))
        )}
      </div>

      {/* Comment Input */}
      <div className="comment-input mt-6">
        <textarea
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          rows={4}
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="mt-4 bg-gradient-to-r from-[#86c9dd] to-[#a078d4] text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition-all"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}
