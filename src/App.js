import "./App.css";
// import { useState } from "react";

const initial = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
];

function App() {
  // const [ttsArr, setTtsArr] = useState(initial);

  return (
    <div className="App">
      <div className="App-header">
        <h3>Reski Firmansyah</h3>
        <table>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((row, rIndex) => {
              return (
                <tr key={rIndex}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((col, cIndex) => {
                    return (
                      <td key={rIndex + cIndex}>
                        <input
                          className="cellInput"
                          disabled={initial[row][col] !== 1}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <div className="Q">
            <h3>Across</h3>
            <ol>
              <li>Pengajaran untuk menguji dalam keadaan nyata</li>
              <li>Universitas Islam Negeri</li>
              <li>Sistem Informasi global yang diakses melalui internet</li>
              <li>Informasi dalam bentuk yang dapat diproses</li>
              <li>Artificial Intelligence</li>
            </ol>
          </div>
          <div className="Q">
            <h3>Down</h3>
            <ol>
              <li>Program perangkat lunak komputer</li>
              <li>Perangkat yang dapat dijalankan secara seluler</li>
              <li>World Wide Web</li>
              <li>Tipe data untuk menyimpan sekumpulan nilai</li>
              <li>Cetak tebal</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
