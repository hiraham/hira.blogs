import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };

  const handleSaveEditedComment = () => {
    if (editingCommentId && newComment.trim() && authorName.trim()) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === editingCommentId
            ? { ...comment, text: newComment, author: authorName }
            : comment
        )
      );
      setEditingCommentId(null);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handleDeleteComment = (commentId: string) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };

  return (
    <div className="mt-8">
      <h2 className="font-semibold text-2xl">Comments</h2>
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold flex justify-between">
                  <p className="text-sm">{comment.author}</p>
                  <div className="space-x-2">
                    <Button
                      onClick={() => handleEditComment(comment.id)}
                      className="text-blue-500 text-sm"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDeleteComment(comment.id)}
                      className="text-slate-500 text-sm"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
                <p className="text-sm mt-2">{comment.text}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-400">No comments yet.</p>
        )}

        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name"
          className="w-full mb-2"
        />

        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Your comment"
          className="w-full mb-2"
        />

        <Button
          onClick={
            editingCommentId ? handleSaveEditedComment : handleAddComment
          }
          className="mt-4"
        >
          {editingCommentId ? "Save Changes" : "Add Comment"}
        </Button>
      </div>
    </div>
  );
}
