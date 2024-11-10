const GAME_BOARD_DIM = 10;
const FIRST_PLAYER = 1;
const SECOND_PLAYER = -1;

const TRANSLATIONS = {
  en: {
    start_game: "Start Game",
    exit_game: "Exit Game",
    settings: "Settings",
    select_language: "Select Language",
    language_selected: "Language Selected:",
    game_resolution_error:
      "Console window is too small. Minimum resolution is required:",
    ship_placement_prompt: "SHIP PLACEMENT",
    player_ready: "First Player, Get Ready!\nPlayer Two, Look Away.",
    player_two_ready: "Player Two, Get Ready!\nPlayer One, Look Away.",
    width: "Width",
    height: "Height",

    ship_placement_phase: "Place Your Ships!",
    controls: "Controls",
    arrow_keys_move: "Arrow keys: Move cursor",
    rotate_key: "R: Rotate ship",
    enter_key: "Enter: Place ship",
    ships_to_place: "Ships To Place",
    spaces: "Spaces",
  },
  no: {
    start_game: "Start Spill",
    exit_game: "Avslutt Spill",
    settings: "Innstillinger",
    select_language: "Velg Språk",
    language_selected: "Språk Valgt:",
    game_resolution_error:
      "Konsollvinduet Er For Lite. Krever Minimumsoppløsning:",
    ship_placement_prompt: "SKIPSPLASSERING",
    player_ready: "'Spiller En', Gjør Deg Klar!\nSpiller To, Se Vekk.",
    player_two_ready: "Spiller To, Gjør Deg Klar!\nSpiller En, Se Vekk.",
    width: "Bredde",
    height: "Høyde",
    ship_placement_phase: "Plasser Skipene!",
    controls: "Kontroller",
    arrow_keys_move: "Piltaster: Flytt Markør",
    rotate_key: "R: Roter Skip",
    enter_key: "Enter: Plasser Skip",
    ships_to_place: "Skip Å Plassere",
    spaces: "Plasser",
  },
};

const LANGUAGE = { ENGLISH: "en", NORWEGIAN: "no" };

export { GAME_BOARD_DIM, FIRST_PLAYER, SECOND_PLAYER, TRANSLATIONS, LANGUAGE };