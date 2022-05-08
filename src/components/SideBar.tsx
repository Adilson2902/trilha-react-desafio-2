import { Button } from "./Button";

interface ContentArray{
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface PropsContent{

    genres: ContentArray[];
    callback: (id: number) => void;
    selectedGenreId: number;
   
}

export function SideBar(props: PropsContent) {
  const { genres, callback, selectedGenreId } = props;
  
  return (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>
    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => callback(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  )
}