import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    const posts = [
      {text: 'Post 1'},
      {text: 'Post 2'},
      {text: 'Post 3'},
      {text: 'Post 4'},
    ];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      // реализуйте тест-кейс
      const findPosts = postsService.findMany();
      expect(
        findPosts.map(({ text }) => {
          return { text };
        }),
      ).toEqual(posts);
    });

    it('should return correct posts for skip and limit options', () => {
      // реализуйте тест-кейс
      const skip = 1;
      const limit = 2;
      const findPosts = postsService.findMany({ skip, limit });
      expect(
        findPosts.map(({ text }) => {
          return { text };
        }),
      ).toEqual(posts.slice(skip, skip + limit));
    });

    // реализуйте недостающие тест-кейсы
    it('should return [] for limit = 0 options', () => {
      const limit = 0;
      const findPosts = postsService.findMany({ limit });
      expect(findPosts).toEqual([]);
    });

    it('should return [] for skip = NaN and limit = NaN options', () => {
      const skip = NaN;
      const limit = NaN;
      const findPosts = postsService.findMany({ skip, limit });
      expect(findPosts).toEqual([]);
    });

    it('should return [] for skip = negative number and limit = negative number options', () => {
      const skip = -1;
      const limit = -1;
      const findPosts = postsService.findMany({ skip, limit });
      expect(findPosts).toEqual([]);
    });

    it('should return [] for skip = Infinity and limit = Infinity options', () => {
      const skip = Infinity;
      const limit = -Infinity;
      const findPosts = postsService.findMany({ skip, limit });
      expect(findPosts).toEqual([]);
    });
  });
});
