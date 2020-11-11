from flask_restful import Resource
from flask import Response, request
from database.models import Comment, User

from flask_restful import Api
from flask_jwt_extended import jwt_required
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist, ValidationError, InvalidQueryError

class CommentsApi(Resource):
    def get(self):
        comments = Comment.objects().to_json()
        return Response(comments, mimetype='application/json', status=200)

    @jwt_required
    def post(self):
        try:
            user_id = get_jwt_identity()
            body = request.get_json()
            user = User.objects.get(id=user_id)
            comment = Comment(**body, added_by=user)
            comment.save()
            user.save()
            id = movie.id
            return {'id':str(id)}, 200
        except (FieldDoesNotExist, ValidationError):
            raise SchematicValidationError
        except NotUniqueError:
            raise CommentAlreadyExistsError
        except Exception as e:
            raise InternalServerError

class CommentApi(Resource):
    @jwt_required
    def put(self, id):
        try:
            user_id = get_jwt_identity()
            comment = Comment.objects.get(id=id, added_by=user_id)
            body = request.get_json()
            Comment.objects.get(id=id).update(**body)
            return '', 200

        except InvalidQueryError:
            raise SchematicValidationError
        except DoesNotExist:
            raise UpdatingCommentError
        except Exception:
            raise InternalServerError

    @jwt_required    
    def get(self, id):
        try:
            comment = Comment.objects.get(id=id).to_json()
            return Response(comments, mimetype="application/json", status=200)

        except DoesNotExist:
            raise CommentNotExistsError
        except Exception:
            raise InternalServerError



    @jwt_required
    def delete(self, id):
        try:
            user_id = get_jwt_identity()
            comment = Comment.objects.get(id=id, added_by=user_id)
            commet.delete()
            return '', 200
        except DoesNotExist:
            raise DeletingCommentError
        except Exception:
            raise InternalServerError