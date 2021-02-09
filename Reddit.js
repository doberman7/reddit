export default async function Reddit() {
  try {
    const res = await fetch("https://www.reddit.com/r/all.json");
    //https://www.reddit.com/r/aww/comments/80o0xo/puppy_spends_a_day_at_the_beach/
    const arayResponse = await res.json();
    // const { data } = arayResponse;
    // const { children } = data;
    // children.map((item) => {
    //   console.log(item.data.subreddit);
    // });

    return (
      <View style={styles.container}>
        <Text>Reddit Clone</Text>
        <p>app</p>
        <StatusBar style="auto" />
      </View>
    );
  } catch (e) {
    console.log(e);
  }
}
