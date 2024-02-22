"use strict";
var comments = [
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
function countTotalComments(comments) {
    var totalCount = comments.length;
    for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {
        var comment_1 = comments_1[_i];
        if (comment_1.replies) {
            totalCount += countTotalComments(comment_1.replies);
        }
    }
    return totalCount;
}
var totalComments = countTotalComments(comments);
console.log("Total komentar: ".concat(totalComments));
