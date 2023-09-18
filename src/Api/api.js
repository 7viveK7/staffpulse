export default async function fetchAnnouncement() {
    try {
        const response = await fetch(
            'https://newsapi.org/v2/everything?q=bitcoin&apiKey=6016a5388f634b0ab29204bdbcb7b8b2'
        );
        const data = await response.json();
        return data?.articles || [];
    } catch (error) {
        console.error(error);

    }
}