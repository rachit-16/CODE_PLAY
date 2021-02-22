const code=` 
Given a 2D board and a word, find if the word exists in the grid.


The word can be constructed from letters of sequentially adjacent cell,
where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be used more than once.


Example:

    board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']

    ]
    
    
    Given word = "ABCCED", return true
    Given word = "SEE", return true
    Given word = "ABCB", return false

    CODE
    bool match(vector<vector<char>>&board,string word,int i,int j,int idx)
    {int n=board.size();
     int m=board[0].size();
     int l=word.size();
     if(idx==l)
         return 1;
      if((i>=n) or (j>=m) or (i<0) or (j<0))
        return 0;
     
     if(board[i][j]==word[idx])
     { char temp=board[i][j];
         board[i][j]='#';
         if( match(board,word,i+1,j,idx+1) or match(board,word,i-1,j,idx+1) or match(board,word,i,j-1,idx+1) or match(board,word,i,j+1,idx+1))
             return true;
      board[i][j]=temp;
     }
     return false;
          
     
      
     
    }
    bool exist(vector<vector<char>>& board, string word) {
    
        int i,j,n,m;
        n=board.size();
        m=board[0].size();
        for(i=0;i<n;i++)
        {
            for(j=0;j<m;j++)
            {
                if(board[i][j]==word[0])
                {
                    if(match(board,word,i,j,0))
                    {
                        return true;
                    }
                }
            }
        }
        return false;
        
    }


`
export default code