import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, StatusBar} from 'react-native';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Title from '../../components/Title/Title';
import MessageButton from '../../components/MessageButton/MessageButton';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import 'react-native-gesture-handler';
import {Routes} from '../../navigation/Routes';

const Home = () => {
  // All of the items in our stories.
  const userStories = [
    {
      firstName: 'Joseph',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Angel',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'White',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Oliver',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Peter',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 5,
    },
    {
      firstName: 'Annie',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 6,
    },
    {
      firstName: 'Marsha',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 7,
    },
    {
      firstName: 'John',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 8,
    },
    {
      firstName: 'Andrew',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 9,
    },
  ];
  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      location: 'Houston, TX',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 423,
      comments: 5,
      bookmarks: 2,
      id: 2,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 1350,
      comments: 25,
      bookmarks: 70,
      id: 3,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 100,
      comments: 8,
      bookmarks: 3,
      id: 4,
    },
    {
      firstName: 'Eric',
      lastName: 'Wilson',
      location: 'Mount Carmel, IL',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 250,
      comments: 50,
      bookmarks: 25,
      id: 5,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      id: 6,
    },
  ];
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView style={(style.appContainer, globalStyle.backgroundWhite)}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={style.userPostContainer}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title={"Let's Explore"} />
                <MessageButton messageCount={2} screenName={Routes.Profile} />
              </View>
              <View style={style.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );

                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );

            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          showsVerticalScrollIndicator={false}
          data={userPostsRenderedData}
          renderItem={({item}) => (
            <UserPost
              key={'userPost' + item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              location={item.location}
              image={item.image}
              profileImage={item.profileImage}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
