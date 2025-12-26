import { useState, useEffect } from 'react';
import { MetaTags } from '../../components/common/SEO/MetaTags';
import { PageHeader } from '../../components/common/UI/PageHeader';
import { ScrollAnimation } from '../../components/common/Animations/ScrollAnimation';
import { SITE_URL } from '../../utils/constants';

interface BlogPost {
  image: string;
  title: string;
  link: string;
}

function NewsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url =
          'https://script.google.com/macros/s/AKfycbwEZxMZFgDxc9OuIzhsvai8CEyYXu0ui8pLnXUj8-yzu1QLvhvXlBX4PDOv8ySEAVDH/exec';
        const response = await fetch(url);
        const data = await response.json();

        // Skip first row (headers) and map to BlogPost objects
        const blogPosts: BlogPost[] = data.slice(1).map((row: string[]) => ({
          image: row[0],
          title: row[1],
          link: row[2],
        }));

        setPosts(blogPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <MetaTags
        title="Blogs & Media - WattGlow Power"
        description="Stay updated with the latest news, blogs, and media coverage from WattGlow Power. Learn about our projects, industry insights, and renewable energy innovations."
        canonical={`${SITE_URL}/news`}
      />

      <PageHeader title="Blogs & Media!" backgroundClass="page-header-news" />

      {/* Blog Posts Section */}
      <div className="container-xxl py-5">
        <div className="container">
          {loading && (
            <div className="text-center">
              <div
                className="spinner-border text-primary"
                style={{ width: '3rem', height: '3rem' }}
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="text-center">
              <p>Error loading blog posts. Please try again later.</p>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center">
              <ScrollAnimation animation="fade-slide-up">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                  <h1 className="mb-4 text-center">Blogs & Media</h1>
                  <p>No blog posts available at the moment. Check back soon!</p>
                </div>
              </ScrollAnimation>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <>
              <ScrollAnimation animation="fade-slide-up">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                  <h1 className="mb-4 text-center">Blogs & Media</h1>
                </div>
              </ScrollAnimation>
              <div className="row g-4">
                {posts.map((post, index) => (
                  <ScrollAnimation
                    key={index}
                    animation="fade-slide-up"
                    delay={index % 3}
                    className="col-md-6 col-lg-4"
                  >
                    <div className="service-item rounded overflow-hidden">
                      <img
                        className="img-fluid img-300"
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                      />
                      <div className="position-relative p-4 pt-0">
                        <h4 className="mb-3">{post.title}</h4>
                        <a
                          className="small fw-medium"
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Click Here <i className="fa fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default NewsPage;
