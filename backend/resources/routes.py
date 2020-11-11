from .comments import CommentsApi, CommentApi
from .auth import SignupApi, LoginApi, HomePageApi
from .reset_password import ForgotPassword, ResetPassword
def initialize_routes(api):
    # api.add_resource(CommentsApi, '/comments')
    # api.add_resource(CommentApi, '/comment/<id>')
    api.add_resource(HomePageApi, '/')
    api.add_resource(CommentsApi, '/api/comments')
    api.add_resource(CommentApi, '/api/comments/<id>')
    
    api.add_resource(SignupApi, '/api/auth/signup')
    api.add_resource(LoginApi, '/api/auth/login')
    api.add_resource(ForgotPassword, '/api/auth/forgot')
    api.add_resource(ResetPassword, '/api/auth/reset')



