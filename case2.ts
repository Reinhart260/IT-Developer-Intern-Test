type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};

const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa'
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      }
    ]
  },
  {
    commentId: 2,
    commentContent: 'Halooo'
  }
];

function countTotalComments(comments: IComment[]): number {
  let totalCount = comments.length; 

  for (const comment of comments) {
    if (comment.replies) {
      totalCount += countTotalComments(comment.replies);
    }
  }

  return totalCount;
}

const totalComments = countTotalComments(comments);
console.log(`Total komentar: ${totalComments}`);
