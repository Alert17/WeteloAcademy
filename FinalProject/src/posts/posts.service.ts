import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Posts} from "./posts.entity";

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Posts)
        private readonly postRepository: Repository<Posts>
    ) {}

    async getPosts() {
        return this.postRepository.find()
    }

    async getPostById(id) {
        return this.postRepository.findOne({where: { id: id}})
    }

    async createPost(data) {
        const post = new Posts()
        post.id = data.id
        post.title = data.title
        post.description = data.description
        post.authorId = data.authorId

        return await this.postRepository.save(post)
    }

    async deletePost(id) {
        return await this.postRepository
            .createQueryBuilder()
            .delete()
            .from(Posts)
            .where("id = :id", { id: id })
            .execute()
    }

    async updatePost(id, data) {
        return await this.postRepository
            .createQueryBuilder()
            .update(Posts)
            .set({
                id: data.id,
                title: data.name,
                description: data.email,
                authorId: data.authorId
            })
            .where("id = :id", { id: id })
            .execute()
    }
}
