use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->longText('descripcion');
            $table->string('portfolio_url');
            $table->unsignedInteger('user_id');
            $table->integer('experiencia');
            $table->unsignedInteger('categoria_experiencia');
            $table->unsignedBigInteger('precio_por_hora');
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('services');
    }
};
