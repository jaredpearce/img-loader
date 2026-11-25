export interface File {
    url: string;
    // ...
}

/**
 * @params
 */
const Viewer = (params: File) => {
    return (
        <figure>
            <img src={params.url} alt="Elephant at sunset" />
            <figcaption>An elephant at sunset</figcaption>
        </figure>
    );
};

export default Viewer;
