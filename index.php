<?php include "header.php"; ?>
    <div class="container text-center">
        <header>
            <h1 class="title">Films and TV shows</h1>
            <p class="text-muted">Do you need a place to store your films and TV shows you need to watch? Why
                not do it here! </br>
        </header>
        <form>
            
            <input type="text" class="todo-input">
            <button class="todo-button" type="submit">
                <i class="fas fa-plus-square"></i>
            </button>
            <div class="select">
                <select name="todos" class="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
        <div class="todo-container">
            <ul class="todo-list"></ul>
        </div>
    </div>
<?php include "footer.php"; ?>