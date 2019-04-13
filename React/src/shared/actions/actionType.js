/*USER*/
export const USER_LOGING_INITIALIZE 		= 'USER_LOGING_INITIALIZE';
export const USER_LOGING_BEGINS 			= 'USER_LOGING_BEGINS';
export const USER_LOGINS_SUCCESS 			= 'USER_LOGINS_SUCCESS';

export const USER_200_INVALID_CREDENTIALS 	= 'INVALID_CREDENTIALS';
export const USER_200_INVALID_TOKEN 		= 'INVALID_TOKEN';
export const USER_500_SERVER_ERROR 			= 'SERVER_ERROR';

export const USER_ACTIVATE_URL 			    = 'https://api.devrant.thusitha.site/v1/user.activate';
export const USER_DEACTIVATE_URL			= 'https://api.devrant.thusitha.site/v1/user.deactivate';

export const USER_DEACTIVATE_XTOKEN 		= 'WCdSSzNPf5siyxoRPp1T9J';

/*POST*/
export const POST_200_ACCESS_DENIED			= 'ACCESS_DENIED';
export const POST_200_MISSING_CONTENT		= 'MISSING_CONTENT';
export const POST_200_INVALID_POST_ID		= 'INVALID_POST_ID';
export const POST_200_MISSING_DIRECTION		= 'MISSING_DIRECTION';
export const POST_200_AUTHOR_CANNOT_VOTE	= 'AUTHOR_CANNOT_VOTE';
export const POST_500_SERVER_ERROR			= 'SERVER_ERROR';

export const POST_LIST_URL 					= 'https://api.devrant.thusitha.site/v1/post.list';
export const POST_LIST_XTOKEN 				= '1LFq2mHVc9WH6NkgXVwV4L';

export const POST_ADD_URL					= 'https://api.devrant.thusitha.site/v1/post.add';
export const POST_ADD_XTOKEN 				= '1LFq2mHVc9WH6NkgXVwV4L';

export const POST_DETAIL_URL 				= 'https://api.devrant.thusitha.site/v1/post.details?postId={postid}';
export const POST_DETAIL_XTOKEN 			= '1LFq2mHVc9WH6NkgXVwV4L';

export const POST_DELETE_URL				= 'https://api.devrant.thusitha.site/v1/post.delete';
export const POST_DELETE_XTOKEN 			= '1LFq2mHVc9WH6NkgXVwV4L';

export const POST_VOTE_UP_URL				= 'https://api.devrant.thusitha.site/v1/post.vote';
export const POST_VOTE_UP_XTOKEN			= 'DvaU44ycBq6AnxKSoyVtBF';

/*Comments*/
export const COMMENTS_200_ACCESS_DENIED 		= 'ACCESS_DENIED';
export const COMMENTS_200_MISSING_COMMENT		= 'MISSING_COMMENT';
export const COMMENTS_200_MISSING_COMMENT_ID	= 'MISSING_COMMENT_ID';
export const COMMENTS_200_MISSING_POST_ID		= 'MISSING_POST_ID';
export const COMMENTS_500_SERVER_ERROR			= '500_SERVER_ERROR';

export const COMMENTS_ADD_URL				= 'https://api.devrant.thusitha.site/v1/comment.add';
export const COMMENTS_ADD_XTOKEN			= '1LFq2mHVc9WH6NkgXVwV4L';

export const COMMENTS_DELETE_URL			= 'https://api.devrant.thusitha.site/v1/comment.delete';
export const COMMENTS_DELETE_XTOKEN			= '1LFq2mHVc9WH6NkgXVwV4L';
