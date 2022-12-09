import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import {PostDto} from "./dto/PostDto"
import {PostsService} from "./posts.service";
import {Posts} from './posts.entity'


@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {
    }

    @Post()
    async createUser(@Body() info: PostDto) {
        return this.postsService.createPost(info)
    }

    @Get()
    async getUsers(): Promise<{status: boolean, result: Posts[] }> {
        const result = await this.postsService.getPosts();
        return {status: true, result}
    }

    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<{ status: boolean, result: Posts }> {
        const result = await this.postsService.getPostById(id)
        return { status: true, result}
    }


    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        return this.postsService.deletePost(id)
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() updatePostData: PostDto) {
        return this.postsService.updatePost(id, updatePostData)
    }
}
